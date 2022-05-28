import { loaderTemplate } from './common/loader.js';
import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { cancelMembership, getRequestsByTeamId, getTeamById, requestToJoin, approveMembership } from '../api/data.js';

const detailsTemplate = (team, isOwner, createControls,  members, pending) => html`
<section id="team-home">
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${team.memberCount} Members</span>
            <div>
                ${createControls}
            </div>
        </div>
        <div class="pad-large">
            <h3>Members</h3>
            <ul class="tm-members">
                <li>My Username</li>
                
                <li>Meowth<a href="#" class="tm-control action">Remove from team</a></li>
            </ul>
        </div>
        ${isOwner ? 
            html`<div class="pad-large">
                    <h3>Membership Requests</h3>
                    <ul class="tm-members">
                        ${pending.map(pendingMemberTemplate)}    
                    </ul>
                    </div>` : ''}
    </article>
</section>
`;

const pendingMemberTemplate = (request, isOwner) => html`
    <li>
        ${request.user.username}
        <a @click=${request.approve} href="javascript:void(0)" class="tm-control action">Approve</a>
        <a @click=${request.decline} href="javascript:void(0)" class="tm-control action">Decline</a>
    </li>
`;

const memberTemplate = (request, isOwner) => html`
    <li>${request.user.username}
        ${ isOwner ? html`<a @click=${request.decline} href="javascript:void(0)" class="tm-control action">Remove from team</a>` : ''}
    </li>
`;

export async function detailsPage(ctx) {
    const teamId = ctx.params.id;

    ctx.render(until(populateTemplate(teamId), loaderTemplate()));


    async function populateTemplate(teamId) {
        const userId = sessionStorage.getItem('userId')
        const [team, requests] = await Promise.all([
            getTeamById(teamId),
            getRequestsByTeamId(teamId)
        ]);
        requests.forEach(r =>{               
            r.approve = (e) => approve(e, r);
            r.decline = (e) => leave(e, r._id);
        });

        const isOwner = userId == team._ownerId;
        const members = requests.filter(r => r.status == 'member')
        const pending = requests.filter(r => r.status == 'pending')
        team.memberCount = members.length;


        return detailsTemplate(team,isOwner, createControls, members, pending);


        function createControls() {

            if (userId) {
                const request = requests.find(r => r._ownerId == userId)
                if (isOwner) {
                    //Current user is owner
                    return html`<a href=${`/edit/${team._id}`} class="action">Edit team</a>`;
                } else if (request && request.status == 'member') {
                    //Current user is a member
                    return html`<a @click=${e => leave(e, request._id)} href="javascript:void(0)" class="action invert">Leave team</a>`;
                } else if (requests.some(r => r._ownerId == userId && r.status == 'pending')) {
                    // Current user has a pending request
                    return html`Membership pending. <a href="javascript:void(0)" class="action invert">Cancel request</a>`
                } else {
                    // Current user is not related to the team
                    return html`<a @click=${join} href="javascript:void(0)" class="action">Join team</a>`
                }
            } else {
                return '';
            }

        }


        async function join(event) {
            event.target.remove();
            await requestToJoin(teamId);
            ctx.remder(await populateTemplate(teamId))
        }

        async function leave(event, requestId) {
            const confirmed = confirm('Are you sure?');
            if(confirmed) {
                event.target.remove();
                await cancelMembership(requestId);
                ctx.remder(await populateTemplate(teamId))
            }
        }

        async function approve(e, request) {
            e.target.remove();
            await approveMembership(request);
            ctx.render(await populateTemplate(teamId))
        }
    }
}