let school = [
    {
        topic: "Math",
        startedTime: new Date(2021, 01, 14, 11, 30),
        endTime: new Date(2021, 01, 14, 17, 45),
        tasksGiven: 15,
        tasksFinished: 9
    },
    {
        topic: "History",
        startedTime: new Date(2021, 01, 13, 15, 30),
        endTime:  new Date(2021, 01, 13, 18, 45),
        tasksGiven: 9,
        tasksFinished: 8
    },
    {
        topic: "English",
        startedTime: new Date(2021, 01, 05, 12, 00),
        endTime: new Date(2021, 01, 05, 13, 30),
        tasksGiven: 25,
        tasksFinished: 20
    },
    {
        topic: "Hebrew",
        startedTime: new Date(2021, 01, 07, 18, 30),
        endTime: new Date(2021, 01, 07, 21, 00),
        tasksGiven: 13,
        tasksFinished: 11
    },
    {   
        topic: "Biology",
        startedTime: new Date(2021, 01, 10, 08, 30),
        endTime: new Date(2021, 01, 10, 14, 20),
        tasksGiven: 15,
        tasksFinished: 14
    },
    {
        topic: "Chemistry",
        startedTime: new Date(2021, 01, 11, 15, 50),
        endTime: new Date(2021, 01, 11, 17, 30),
        tasksGiven: 9,
        tasksFinished: 3
    },
    {
        topic: "Bible",
        startedTime: new Date(2021, 01, 19, 21, 00),
        endTime: new Date(2021, 01, 19, 22, 30),
        tasksGiven: 14,
        tasksFinished: 9
    },
    {
        topic: "Drama",
        startedTime: new Date(2021, 01, 12, 10, 30),
        endTime: new Date(2021, 01, 12, 15, 50),
        tasksGiven: 13,
        tasksFinished: 11
    },
    {
        topic: "Physics",
        startedTime: new Date(2021, 01, 18, 15, 15),
        endTime: new Date(2021, 01, 18, 22, 00),
        tasksGiven: 25,
        tasksFinished: 11
    },
    {
        topic: "Literature",
        startedTime: new Date(2021, 01, 16, 16, 40),
        endTime: new Date(2021, 01, 16, 18, 15),
        tasksGiven: 13,
        tasksFinished: 6
    }
];

for(let lesson of school)
{
    let percentFinished = lesson.tasksFinished/ lesson.tasksGiven* 100;
    lesson.tasksFinishedPrecent = Math.floor(percentFinished);

    //add the total time at work
    let workTime = lesson.endTime - lesson.startedTime;
    workTime = Math.round(workTime / 60000);
    let hWork = Math.floor(workTime/ 60);
    let mWork = workTime - (hWork * 60);
    workTime = hWork + ":" + mWork;
    lesson.totalTime = workTime;
}

 document.write(`<table><tr><th class="headTable">Topic</th><th class="headTable">Tasks Given</th><th class="headTable">Tasks Finished</th><th class="headTable">Tasks Finished %</th><th class="headTable">Started Time</th><th class="headTable">End Time</th><th class="headTable">Total Time</th></tr>`);

for(let lesson of school)
{
    let perFinishedClass, totTimeClass;
    if(lesson.tasksFinishedPrecent < 50)
    {
        perFinishedClass = 'fRed';
    }
    else if(lesson.tasksFinishedPrecent >= 50 && lesson.tasksFinishedPrecent < 80)
    {
        perFinishedClass = 'fYellow';
    }
    else if(lesson.tasksFinishedPrecent >= 80)
    {
        perFinishedClass = 'fGreen';
    }

    if(lesson.totalTime[0] <= 2)
    {
        totTimeClass = 'fPurple';
    }
    else if(lesson.totalTime[0] > 2 && lesson.totalTime[0] <= 4)
    {
        totTimeClass = 'fPink';
    }
    else if(lesson.totalTime[0] >= 4)
    {
        totTimeClass = 'fWhite';
    }
    let sTime = lesson.startedTime.getHours() + ":" + lesson.startedTime.getMinutes();
    let eTime = lesson.endTime.getHours() + ":" + lesson.endTime.getMinutes();

    document.write(`<tr><th class="topic">${lesson.topic}</th><th class="classesTable">${lesson.tasksGiven}</th><th class="classesTable">${lesson.tasksFinished}</th><th class="${perFinishedClass}">${lesson.tasksFinishedPrecent + "%"}</th><th class="classesTable">${sTime}</th><th class="classesTable">${eTime}</th><th class="${totTimeClass}">${lesson.totalTime}</th></tr>`);
}
document.write('</table>');
