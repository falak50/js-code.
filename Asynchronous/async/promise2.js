console.log('hello 1')
const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'technical meeting',
            location: 'Akther building',
            time: '8:00 PM'
        };
        resolve(meetingDetails); // Resolve with meetingDetails object
    } else {
        reject('Meeting already scheduled'); // Reject with error message directly
    }
});

meeting
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));

for(let i=0;i<20000;i++){
    console.log('hello 2')
}