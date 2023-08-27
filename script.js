var element = document.getElementById("area");

var num = 10;

var one = (cb=()=>{})=>{
    // num--;
    setTimeout(()=>{
        element.innerText = num;
        cb();
    },1000)
    // num--;
};

var two = (cb=()=>{})=>{
    num--;
    setTimeout(()=>{
        element.innerText = num;
        cb();
    },1000)
    // element.innerText = num;
    // cb();
};

var three = (cb=()=>{})=>{
    num--;
    setTimeout(()=>{
        element.innerText = num;
        cb();
    },1000)
    // element.innerText = num;
    // cb();
};

var four = (cb=()=>{})=>{
    num--;
    setTimeout(()=>{
        element.innerText = num;
        cb();
    },1000)
    // element.innerText = num;
    // cb();
};

var five = (cb=()=>{})=>{
    num--;
    setTimeout(()=>{
        element.innerText = num;
        cb();
    },1000)
    // element.innerText = num;
    // cb();
};

var six = (cb=()=>{})=>{
    num--;
    setTimeout(()=>{
        element.innerText = num;
        cb();
    },1000)
    // element.innerText = num;
    // cb();
};

var seven = (cb=()=>{})=>{
    num--;
    setTimeout(()=>{
        element.innerText = num;
        cb();
    },1000)
    // element.innerText = num;
    // cb();
};

var eight = (cb=()=>{})=>{
    num--;
    setTimeout(()=>{
        element.innerText = num;
        cb();
    },1000)
    // element.innerText = num;
    // cb();
};

var nine = (cb=()=>{})=>{
    num--;
    setTimeout(()=>{
        element.innerText = num;
        cb();
    },1000)
    // element.innerText = num;
    // cb();
};
// var text_to_display = "Happy Independence day"

var ten = (cb=()=>{})=>{
    num--;
    element.innerText = num;
    setTimeout(()=>{
        console.log(num);
        var text_to_display = "Happy Independence day..!"
        element.style.color = "red";
        element.innerText = text_to_display;
        cb();
    },1000)
    // element.innerText = num;
    // cb();
};

// one(two(three(four(five(six(seven(eight(nine(ten())))))))))
console.log(num)

console.log(one(()=>{}))

one(()=>{
    two(()=>{
        three(()=>{
            four(()=>{
                five(()=>{
                    six(()=>{
                        seven(()=>{
                            eight(()=>{
                                nine(()=>{
                                    ten(()=>{

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})