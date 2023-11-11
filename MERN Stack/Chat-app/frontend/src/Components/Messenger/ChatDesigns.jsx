const SenderChats = ({ pngData }) => {
  return (
    <>
      <div className="s--chat--main">
        <div className="user--logo">A</div>
        <img
          alt="Something went wrong!"
          src={pngData}
          className="user--chat--content"
        ></img>
      </div>
    </>
  );
};

const ReciverChats = ({ pngData }) => {
  return (
    <>
      <div className="s--chat--main reciver">
        <div className="user--logo">A</div>
        <img
          alt="Something went wrong!"
          className="user--chat--content"
          src={pngData}
        ></img>
      </div>
    </>
  );
};

export { SenderChats, ReciverChats };
