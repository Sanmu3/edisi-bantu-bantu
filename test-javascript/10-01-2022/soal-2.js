// 1.groupingByContinent
const names = [ "Dito-ER", "Bagus-AS", "Ardi-AU", "Andrean-AF", "Idham-AM", "Terry-AM", "Patra-AF"];

function groupingByContinent(names) {
  const continentGroup = {
    'AS': [],
    'AF': [],
    'AM': [],
    'ER': [],
    'AU': []
  }

  for (let i = 0; i < names.length; i++) {
    const current = names[i];
    const continentCode = current[current.length - 2] + current[current.length - 1];

    

    continentGroup[continentCode].push(getName(names[i]));
  }

  return {
    'Asia': continentGroup.AS,
    'Afrika': continentGroup.AF,
    'Amerika': continentGroup.AM,
    'Eropa': continentGroup.ER,
    'Australia': continentGroup.AU
  }
}

let groupNames = groupingByContinent(names);
console.log(groupNames); 
/*
Output :
{
    Asia: ["Bagus"],
    Afrika: ["Andrean", "Patra"],
    Amerika: ["Idham", "Terry"],
    Eropa: ["Dito"],
    Australia: ["Ardi"]
}
 */

// 2.getName
function getName(name) {
  let result_name = '';

  for (let j = 0; j < name.length; j++) {
    if (j < name.length - 3) {
      result_name += name[ j ];
    }
  }

  return result_name;
}