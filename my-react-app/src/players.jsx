
// eslint-disable-next-line react/prop-types
let Playerlist=({data})=>{
    // eslint-disable-next-line react/prop-types
    let playerlist=data.map((player,index)=>{
        return(
            <div key={index}>
                <div>{player}
                    </div>

            </div>
        )
    });
    return(
        <div>
            {playerlist}
        </div>
    )
};
export default Playerlist;