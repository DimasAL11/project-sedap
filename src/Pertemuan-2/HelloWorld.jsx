export default function HelloWorld(){
    const propsUserCard = {
        nama: "Goku",
        nim: "2455301218",
        tanggal: "2026-03-11"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
            nama = "Dimas Al Fajri"
            nim = "2455301218"
            tanggal = "2026/03/11"/>
            <UserCard {...propsUserCard}/>
            <img src="img/download.jpg" alt="logo" width={500} height={300}/>
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small>SALAM DARI BINJAI</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}