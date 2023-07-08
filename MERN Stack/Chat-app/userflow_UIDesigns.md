## Userflow and UI Design

[Figma file](https://www.figma.com/file/Y9onRzXddOmEvMCofZ5Z3n/Chat-App?type=design&node-id=0%3A1&t=70nJRpM96uMogddP-1)

DB Schema:
{
id
username
email
password
session
otp
chat_history: [
{
userId:
databaseId:
},
]
}

databaseID => Appwrite document ID

Appwrite document structure:

ChatHistory: [
{
svgLink:
senderId:
}
]
