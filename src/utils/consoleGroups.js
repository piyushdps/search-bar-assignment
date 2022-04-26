export const consoleGroups = (
    groupName,arrOfMessages
)=>{

    console.groupCollapsed(groupName)
    arrOfMessages.forEach(element => {
        console.log(element)
    });
    console.groupEnd()

}