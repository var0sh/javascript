class Storage{
    static getCourseLS(){
        let courses;

        if (localStorage.getItem('courses') === null) {
            courses = [];
        }else{
            courses = JSON.parse(localStorage.getItem('courses')) /*DİKKKATTT*/
        }

        return courses;

    }

    static displayCoursesLS(){
        let courses = Storage.getCourseLS();

        courses.forEach(course => {
            const ui = new UI()
            ui.addCourseToList(course);
        });

    }

    static addCourseLS(course){
        const courses = Storage.getCourseLS();

        courses.push(course);

        localStorage.setItem('courses', JSON.stringify(courses));

    }

    static deleteCourseLS(element){

        if (element.classList.contains('delete')) {
            const id = element.getAttribute('data-id');
            const kurslar = Storage.getCourseLS();

            kurslar.forEach((item , index) => {
                if (item.courseId == id) {
                    kurslar.splice(index, 1)
                }
            })
        }

        localStorage.setItem('kurslar', JSON.stringify(kurslar))

    }
}

class Course {
    constructor(title, instructor, image){
        this.courseId = Math.floor(Math.random() * 1000000)
        this.title = title,
        this.instructor = instructor,
        this.image = image
    }
}

class UI{

    addCourseToList(course){

            const list = document.getElementById('course-list');

            let html = `
                <td><img src="image/${course.image}"></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><button class="btn btn-danger btn-sm delete" data-id="${course.courseId}">Delete</button></td>
            `

            list.innerHTML += html;

    }

    clearInputs(){
        title.value = '';
        instructor.value = '';
        image.value = '';
    }

    deleteCourse(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
            
            return true
        }
    }

    showAlert(message, className){

        let alert = `
            <div class="alert alert-${className}">
                ${message}
            </div>
        `

        const row = document.querySelector('.row');

        row.insertAdjacentHTML('beforeBegin', alert)

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', Storage.displayCoursesLS())

document.querySelector('button').addEventListener('click', e => {

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    const course = new Course(title, instructor, image);
    const ui = new UI();
    
    if (title === '' || instructor === '' || image === '') {
       ui.showAlert('Boşluklar var.', 'warning')
    }else{
        ui.addCourseToList(course);

        ui.showAlert('Başarıyla eklendi.', 'success');

        ui.clearInputs();

        Storage.addCourseLS(course);
    }

    e.preventDefault();
})

document.getElementById('course-list').addEventListener('click', e => {

    const ui = new UI()

    if(ui.deleteCourse(e.target) == true){
        Storage.deleteCourseLS(e.target)
        ui.showAlert('Başarıyla silindi.', 'danger')
    }

})