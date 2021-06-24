
import React, { useState, useEffect } from 'react'
//
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { TicketTable } from '../../components/ticketsTable/TicketTable';
import tickets from '../../assets/testticketdata.json'

export const TicketList = () => {
    const [searchStr, setSearchStr] = useState('');
    const [displayTickets, setDisplayTickets] = useState(tickets)
    // const tickets = [];

    const handleChange = e => {
        const str = e.target.value;
        setSearchStr(str);
        searchTicket(str);
    }

    useEffect(() => {
    }, [searchStr, displayTickets])

    const formProps = {
        handleChange,
        searchStr
    }

    const searchTicket = (str) => {
        // let newProfiles = profiles.filter((profile) => profile.id !== id);
        let searchedTickets = tickets.filter((ticket) => ticket.subject.toLowerCase().includes(str.toLowerCase()));
        setDisplayTickets(searchedTickets);
    }

    return (
        <Container className="ticketList-container" >
            <Row>
                <Col>
                    <PageBreadcrumb pageName='Tickets' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="info"> Add new Ticket</Button>
                </Col>
                <Col className="text-right">
                    <SearchForm {...formProps} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TicketTable tickets={displayTickets} />
                </Col>
            </Row>
        </Container>
    )
}
