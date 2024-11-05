## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
//ƒ (...t){U("console",{args:t,level:e});const n=r.LD[e];n&&n.apply(R.n2.console,t)}
Now enter just `console` in the Console, what output do you get back?
//console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
//'object'
Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
//console.log() : show in console a message
//console.assert():An error message appears in the console if the assertion is false. If the statement is true, nothing will appear.

