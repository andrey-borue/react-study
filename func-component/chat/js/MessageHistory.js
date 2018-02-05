'use strict';

function MessageHistory({list}) {

  const messages = list.map(item => {
    let MessageComponent;
    switch (item.type) {
      case 'message':
        MessageComponent = Message;
        break;
      case 'response':
        MessageComponent = Response;
        break;
      case 'typing':
        MessageComponent = Typing;
        break;
      default:
        console.error("Unknown message type:" + item.type);
        return null;
    }

    return <MessageComponent from={item.from} message={item} key={item.id} />
  });

  return (
    <ul>{ messages }</ul>
  )
}

MessageHistory.defaultProps = {
  list: []
};
