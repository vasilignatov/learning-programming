import { setupComments, viewComments } from './comments.js';
import { setupTopics, viewTopics } from './topics.js';

const container = document.querySelector('.container');
const topics = document.getElementById('topics');
const comments = document.getElementById('comments');

setupTopics(container, topics);
// setupComments(container, comments);

viewTopics();
/*
1.load topics
2.implement NewTopic func
    - get and chech datas from formData
3.Load all topics
4.EventListener on the topic

    if topic is clicked change the view

5. implement Comments
    - load comments
    - load newComments func
        -get and check data from form
        -send request to server
        -load comments again
*/
