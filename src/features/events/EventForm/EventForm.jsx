import React, { useState } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const EventForm = ({ handleCancel, createEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [hostedBy, setHostedBy] = useState("");

  const onFormSubmit = e => {
    e.preventDefault();
    createEvent({ title, date, city, venue, hostedBy });
  };

  return (
    <div>
      <Segment>
        <Form onSubmit={onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Event Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              value={date}
              onChange={e => setDate(e.target.value)}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              value={venue}
              onChange={e => setVenue(e.target.value)}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              value={hostedBy}
              onChange={e => setHostedBy(e.target.value)}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    </div>
  );
};

export default EventForm;
