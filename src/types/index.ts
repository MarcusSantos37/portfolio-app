export type ExperiencesData = {
  id: number;
  attributes: {
    company: string;
    role?: string;
    startDate?: string;
    endDate?: string;
  };
};

export type ContactsData = {
  id: number;
  attributes: {
    title: string;
    subtitle?: string;
    icon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    link: string;
  };
};

export type TechnologiesData = {
  id: number;
  attributes: {
    apps: {
      data: {
        attributes: {
          icon: { data: { attributes: { url: string } } };
          name: string;
        };
      }[];
    };
    dev: {
      data: {
        attributes: {
          icon: { data: { attributes: { url: string } } };
          name: string;
        };
      }[];
    };
    services: {
      data: {
        attributes: {
          icon: { data: { attributes: { url: string } } };
          name: string;
        };
      }[];
    };
  };
};

export type ProfileData = {
  id: number;
  attributes: {
    name: string;
    role?: string;
    email: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};
