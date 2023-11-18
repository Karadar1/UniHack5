import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import {
  BikeCard,
  BikeContainer,
  Container,
  Input,
  Label,
  SearchInputContainer,
  SortButton,
} from './BrowsePage.styled';
import Lense from 'src/assets/svg/Lense';

export default function BrowsePage() {
  return (
    <Container>
      <Navbar />
      <Label>
        <span>we insure</span>
        <h2>
          QUALITY <span>and</span> MANTAINABILITY
        </h2>
        <span>for the bikes that we sell</span>
      </Label>

      <SearchInputContainer>
        <Input>
          <Lense />
          <input placeholder="Search" />
        </Input>
        <SortButton>
          <button>
            Sorted by: <b>name</b>
          </button>
        </SortButton>
      </SearchInputContainer>

      <BikeContainer>
        <BikeCard>
          <img
            src="https://media.wired.com/photos/61afb905d184762c75e00411/master/pass/Gear-Jackbrabbit-Bike-Yellow-top.jpg"
            alt="Bike"
          />
          <p className="price">
            Price: <b>$100</b>
          </p>
          <p className="description">
            Pretty cool bike, others may say "Nu bate, nu troncane". The
            previous owner was an old lady who barely used it. It's practically
            new.
          </p>
          <Link to="#" className="view-link">
            View Bike
          </Link>
        </BikeCard>

        <BikeCard>
          <img
            src="https://media.wired.com/photos/61afb905d184762c75e00411/master/pass/Gear-Jackbrabbit-Bike-Yellow-top.jpg"
            alt="Bike"
          />
          <p className="price">
            Price: <b>$100</b>
          </p>
          <p className="description">
            Pretty cool bike, others may say "Nu bate, nu troncane". The
            previous owner was an old lady who barely used it. It's practically
            new.
          </p>
          <Link to="#" className="view-link">
            View Bike
          </Link>
        </BikeCard>

        <BikeCard>
          <img
            src="https://media.wired.com/photos/61afb905d184762c75e00411/master/pass/Gear-Jackbrabbit-Bike-Yellow-top.jpg"
            alt="Bike"
          />
          <p className="price">
            Price: <b>$100</b>
          </p>
          <p className="description">
            Pretty cool bike, others may say "Nu bate, nu troncane". The
            previous owner was an old lady who barely used it. It's practically
            new.
          </p>
          <Link to="#" className="view-link">
            View Bike
          </Link>
        </BikeCard>

        <BikeCard>
          <img
            src="https://media.wired.com/photos/61afb905d184762c75e00411/master/pass/Gear-Jackbrabbit-Bike-Yellow-top.jpg"
            alt="Bike"
          />
          <p className="price">
            Price: <b>$100</b>
          </p>
          <p className="description">
            Pretty cool bike, others may say "Nu bate, nu troncane". The
            previous owner was an old lady who barely used it. It's practically
            new.
          </p>
          <Link to="#" className="view-link">
            View Bike
          </Link>
        </BikeCard>

        <BikeCard>
          <img
            src="https://media.wired.com/photos/61afb905d184762c75e00411/master/pass/Gear-Jackbrabbit-Bike-Yellow-top.jpg"
            alt="Bike"
          />
          <p className="price">
            Price: <b>$100</b>
          </p>
          <p className="description">
            Pretty cool bike, others may say "Nu bate, nu troncane". The
            previous owner was an old lady who barely used it. It's practically
            new.
          </p>
          <Link to="#" className="view-link">
            View Bike
          </Link>
        </BikeCard>
      </BikeContainer>
    </Container>
  );
}
