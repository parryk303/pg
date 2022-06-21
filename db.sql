CREATE DATABASE cyberfusion_db;
-- \c into cyberfusion_db

CREATE TABLE users(
    email
    created
    lastSignIn 
    user_id SERIAL PRIMARY KEY,
);

CREATE TABLE ssaqs(
    id SERIAL PRIMARY KEY,
    ssaqs jsonb
);

CREATE TABLE tube(
    id SERIAL PRIMARY KEY,
    tube jsonb
);

CREATE TABLE approved_awaiting(
    id SERIAL PRIMARY KEY,
    approved_awaiting json
);

CREATE TABLE ratings(
    id SERIAL PRIMARY KEY,
    ratings jsonb
);

CREATE TABLE fusion_tube(
    id SERIAL PRIMARY KEY,
    user_id 
    saved jsonb NOT NULL,
);

-- CREATE TABLE table_name (
--   id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
--   inserted_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
--   updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
--   data jsonb,
--   name text
-- );
