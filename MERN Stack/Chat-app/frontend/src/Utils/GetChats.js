import {
  SenderChats,
  ReciverChats,
} from "./../Components/Messenger/ChatDesigns";

const GetChats = async (id, setresultChats, SessionUser) => {
  try {
    const res = await fetch(`http://localhost:5000/users/getchats?id=${id}`);
    const data = await res.json();
    console.log(data);
    let resChats = await data.data.map(async (e) => {
      const ObjectData = JSON.parse(e);
      const image = await fetch(ObjectData.imgLink);
      const imageJson = await image.text();
      if (ObjectData.sendersId === SessionUser.id) {
        return <ReciverChats pngData={imageJson} />;
      } else {
        return <SenderChats pngData={imageJson} />;
      }
    });
    const finalRes = await Promise.all(resChats);
    setresultChats(finalRes);
  } catch (err) {
    console.log("error: " + err);
  }
};

export default GetChats;
