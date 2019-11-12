var chat = document.querySelector('.chat-content');
var chatMsg = chat.children;
var formNewMsg = document.querySelector('.chat-form');
var formNewMsgText = formNewMsg.querySelector('.chat-form-input');
var msgTemplate = document.querySelector('#message-template').content;
var newMsg = msgTemplate.querySelector('.chat-message');
console.log(newMsg);
var sendButton = formNewMsg.querySelector ('.chat-form-button');

sendButton.addEventListener('click', function(evt){
  evt.preventDefault();
  var newChatMsg = newMsg.cloneNode(true);
  var newChatMsgText = newChatMsg.querySelector('.chat-message-text');
  newChatMsgText.textContent=formNewMsgText.value;
  chat.appendChild(newChatMsg);
  formNewMsgText.value='';
  delMsgHandler(newChatMsg);
});

var delMsgHandler = function (item){
  var closeButton = item.querySelector('.chat-message-button');
  closeButton.addEventListener('click', function(){
    item.remove();
    });

  }
