import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './Job.js';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';


function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-4">
      <nav className="navbar-expand-md gitNav mb-4">
        <div className="container gitNavbarContainer">
          <FontAwesomeIcon icon="home" color="white" className="homeIcon mr-4" />
          <h1 className="mb-4 gitTitle">GitHub Jobs</h1>
        </div>
      </nav>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {!loading && <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> }
      <div className="jobLoading mt-5">
      {loading && <h1 className="jobLoadingText mb-4">Loading Jobs...</h1>}
      {loading && <FontAwesomeIcon icon="cog" color="black" className="cogIcon" spin/>}
      </div>
      {error && <h1>Error. Try Refreshing</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      {!loading && <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> }
    </Container>
  );
}

export default App;
