import './ResultComponent.css'

let ResultComponent = () => (
    <div className="Result">
        <div className="title">Result</div>
        <div className="card">
            <div className="comment">You need more practice!</div>
            <div className="score">Your score is 20%</div>
            <div className="stats">
                {[1,2,3,4,5].map(()=><div className="stat">
                    <div className="stat-title">Total number of quesions</div>
                    <div className="stat-value">23</div>
                </div>)}
            </div>
        </div>
        <div className="cta">
            <button className='again'>Play Again</button>
            <button className='home'>Back to Home</button>
        </div>
    </div>
);

export default ResultComponent