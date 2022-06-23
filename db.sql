CREATE DATABASE cyberfusion_db;
-- \c into cyberfusion_db

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

-- USER TRACKER

CREATE TABLE ssa(
    user_id text PRIMARY KEY,
    avatar text NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    created text NOT NULL,
    lastSignIn text NOT NULL
);

CREATE TABLE sr(
    user_id text PRIMARY KEY,
    avatar text NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    created text NOT NULL,
    lastSignIn text NOT NULL
);

CREATE TABLE od(
    user_id text PRIMARY KEY,
    avatar text NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    created text NOT NULL,
    lastSignIn text NOT NULL
);

CREATE TABLE ft(
    user_id text PRIMARY KEY,
    avatar text NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    created text NOT NULL,
    lastSignIn text NOT NULL
);
