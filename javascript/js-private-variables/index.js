const Door = (function door() {
  let isLocked = true;

  function useKey() {
    isLocked = !isLocked;
  }

  function checkStatus() {
    return isLocked;
  }

  return {
    useKey,
    isLocked: isLocked,
    checkDoor: checkStatus,
  };
})();

console.log("the door is locked? : ", Door.checkDoor()); // the door is locked? :  true
Door.useKey();
console.log("the door is locked? : ", Door.checkDoor()); // the door is locked? :  false
console.log(Door.isLocked); // true

/**
 * So even though we have
 */
