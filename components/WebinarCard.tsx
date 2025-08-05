import React from 'react';
import { Webinar } from '../lib/webinar-data';
import moment from 'moment';

interface WebinarCardProps {
  webinar: Webinar;
  onRegister?: (webinar: Webinar) => void;
}

const WebinarCard: React.FC<WebinarCardProps> = ({ webinar, onRegister }) => {
  const handleRegister = () => {
    if (onRegister) {
      onRegister(webinar);
    }
  };

  return (
    <div className="card-premium mb-6">
      <div className="aspect-responsive">
        <img src={webinar.thumbnail} alt={webinar.title} />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <img src={webinar.presenter.avatar} alt={webinar.presenter.name} className="w-12 h-12 rounded-full border-2 border-primary mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-primary">{webinar.presenter.name}</h3>
            <p className="text-sm text-muted-foreground">{webinar.presenter.title}</p>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 text-accent">{webinar.title}</h2>
        <p className="text-muted-foreground mb-4">{webinar.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-primary">{moment(webinar.date).format('MMMM Do YYYY, h:mm a')}</span>
          <button
            onClick={handleRegister}
            className="btn"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebinarCard;

