module.exports = {
  servers: {
    one: {
      host: '104.131.129.29',
      username: 'root',
      //password: 'password'
      pem: '~/.ssh/id_rsa'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'kuzu',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {/*
      serverOnly: true,*/
    },
    docker: {
      image: 'abernix/meteord:node-8.4.0-base'
    },
    env: {
      ROOT_URL: 'http://producer.kuzu.fm',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
