class Course {
    constructor(
        id, 
        subcategoryId, 
        title,
        price, 
        imageUrl, 
        duration, 
        isFree, 
        isHard
    )   {
            this.id = id;
            this.subcategoryId = subcategoryId;
            this.title = title;
            this.price = price;
            this.imageUrl = imageUrl;
            this.duration = duration;
            this.isFree = isFree;
            this.isHard = isHard;

        }
}

export default Course;