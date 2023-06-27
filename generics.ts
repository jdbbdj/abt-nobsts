
const genericUseState = <T>(initial:T):[()=>T,(v:T)=>void]=>{
    let val:T = initial;
    return [
        ()=>val,
        (v:T)=>{
            val=v
        }
    ]
}

const [user,setUser]=genericUseState(1)

console.log(user());
setUser(62);
console.log(user());

//override the T
const [users,setUsers]=genericUseState<string|null>(null)

console.log(users());
setUsers("str");
console.log(users());


//ranker

interface Rank<RankItem> {
    item:RankItem;
    rank:number;
    
}

const ranker =<RankItem> (items:RankItem[],rank:(v:RankItem)=>number):RankItem[]=>{
   
    const ranks:Rank<RankItem>[] = items.map((item)=>({
        item,
        rank:rank(item)
    }))

    ranks.sort((a,b)=>b.rank-a.rank)

    return ranks.map((rank)=>rank.item)
}

interface Pokemon{
    name:string;
    hp:number;
    atk:number
}

const pokemon: Pokemon[] = [
    {
        name:"Bulbasaur",
        hp:20,
        atk:500
    },
    {
        name: "Megasaur",
        hp:50,
        atk:450
    }
]

const ranks = ranker(pokemon,({atk})=>atk);

console.log(ranks)