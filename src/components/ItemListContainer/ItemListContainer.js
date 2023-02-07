export default function ItemListContainer ({greeting}) {
    return <h1 style={{color: "#153840", width: '100%', height: 'calc(100vh - 95px)', fontSize: '70px', display: "flex", justifyContent: 'center',
    alignItems: 'center', backgroundColor: "#A8BFBB"}}>{greeting}</h1>;
}