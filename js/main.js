function changeSection(section){
    var timeline = document.getElementById('timeline');
    var liveclass = document.getElementById('liveclass');
    var notes = document.getElementById('notes');

    var timeline_btn = document.getElementById('timeline-btn');
    var liveclass_btn = document.getElementById('liveclass-btn');
    var notes_btn = document.getElementById('notes-btn');

    switch (section) {
        case 'timeline':
            liveclass.classList.add("hidden");
            liveclass_btn.classList.add("btn-off");
            liveclass_btn.classList.remove("active");
            notes.classList.add("hidden");
            notes_btn.classList.add("btn-off");
            notes_btn.classList.remove("active");

            timeline.classList.remove("hidden");
            timeline_btn.classList.remove("btn-off");
            timeline_btn.classList.add("active");
            

            break;
        case 'liveclass':
            timeline.classList.add("hidden");
            timeline_btn.classList.add("btn-off");
            timeline_btn.classList.remove("active");
            notes.classList.add("hidden");
            notes_btn.classList.add("btn-off");
            notes_btn.classList.remove("active");

            liveclass.classList.remove("hidden");
            liveclass_btn.classList.remove("btn-off");
            liveclass_btn.classList.add("active");
            break;

        case 'notes':
            liveclass.classList.add("hidden");
            liveclass_btn.classList.add("btn-off");
            liveclass_btn.classList.remove("active");
            timeline.classList.add("hidden");
            timeline_btn.classList.add("btn-off");
            timeline_btn.classList.remove("active");

            notes.classList.remove("hidden");
            notes_btn.classList.remove("btn-off");
            notes_btn.classList.add("active");
            break;
    }

}
