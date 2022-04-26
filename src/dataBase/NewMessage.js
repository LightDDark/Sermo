import HandleContent from "./HandleContent";

function NewMessage(logDB,type,content,user){
    const current = [];
    for(let i=0;i<logDB.props.messages.length;i++){
        current.concat(logDB.props.messages[i]);
    }
    const handeledContent = <HandleContent type={type} content={content} />;
    current.concat([
        {
            type: type,
            content: handeledContent,
            user: user,
            date: new Date(),
        },
    ]);
    logDB.props.messages = current;
}
export default NewMessage;