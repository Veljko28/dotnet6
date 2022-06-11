import { Button } from '@mui/material';
import Link from 'next/link';




const Pages = ({pageId, numOfPages}) => {

    
    const intPageId = parseInt(pageId);

    const PageButton = ({id}) => {
        return (
            <Link key={Math.random() % 100} href={`/jobs/${id}`}>
                    <Button variant="contained" 
                    style={{backgroundColor: id == intPageId ? '#eee' : '#fff', color: '#0cafe5', margin: '5px'}}>
                        {id}
                    </Button>
            </Link>
        )
    }

    const PrevButton = () => {
        return (<Link key={Math.random() % 100} href={`/jobs/${intPageId-1}`}>
                    <Button variant="contained" 
                    style={{backgroundColor: '#fff', color: '#0cafe5', margin: '5px'}}>
                        Prev
                    </Button>
            </Link>)
    }

     const NextButton = () => {
        return (<Link key={Math.random() % 100} href={`/jobs/${intPageId+1}`}>
                    <Button variant="contained" 
                    style={{backgroundColor: '#fff', color: '#0cafe5', margin: '5px'}}>
                        Next
                    </Button>
            </Link>)
    }

    return (
        <div>
            {intPageId > 1 ? <PrevButton/> : null}
            {intPageId > 1 ? <PageButton id={intPageId-1}/> : null}
            <PageButton id={intPageId}/>
            {intPageId < numOfPages ? <PageButton id={intPageId+1}/> : null}
            {intPageId !== numOfPages ? <NextButton/> : null}
        </div>
    );
}

export default Pages;