// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(driver =>
        driver.toLowerCase() === string.toLowerCase()
    );
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver =>driver.slice(0, string.length)=== string
    );
}

function matchName(drivers, string) {
    return drivers.filter(driver =>
      driver.name.toUpperCase() === string.toUpperCase()
    );
  }