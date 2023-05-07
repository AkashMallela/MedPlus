const scrollContainers = document.querySelectorAll(".category-section>div");
scrollContainers.forEach(s=>s.a=0);
console.log(scrollContainers)
let t=new Date().getTime();
scrollContainers.forEach(scrollContainer=>scrollContainer.addEventListener("wheel", (evt) => {
    // if(scrollContainer.getBoundingClientRect().width>window.innerWidth)
    evt.preventDefault();
    if(new Date().getTime()-t>10){
    t=new Date().getTime();


    let a=-1;
    if(evt.deltaY < 0) a=1;


    let p=scrollContainer.getBoundingClientRect().width/(scrollContainer.getBoundingClientRect().width+window.innerWidth);

    console.log(scrollContainer.getBoundingClientRect().width)
    if(scrollContainer.a+a*15>-p*100 && scrollContainer.a*a*4<=0) scrollContainer.a+=a*15;
    console.log(scrollContainer.a)

    scrollContainer.style.transform='translateX('+scrollContainer.a+'%)'
    // scrollContainer.animate([
    //     {transform: `translateX(${evt.deltaY}%)` }
    // ])
    // scrollContainer.scrollLeft += evt.deltaY;
}}))