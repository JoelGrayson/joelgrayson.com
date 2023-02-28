-- joelgrayson/contact_form

CREATE TABLE contact_form(
    id SERIAL PRIMARY KEY,
	date_submitted TIMESTAMP,
	name VARCHAR(128),
	email VARCHAR(256),
	message TEXT
);

SELECT * FROM contact_form;

INSERT INTO contact_form (date_submitted, name, email, message)
VALUES
    ();

