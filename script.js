
let day = prompt('What day is today?','');
switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        alert( 'Working day' );
    case 'Saturday':
    case 'Sunday':
        alert( 'Weekend' );
    default:
        alert('Can not define, please try another value');
}

