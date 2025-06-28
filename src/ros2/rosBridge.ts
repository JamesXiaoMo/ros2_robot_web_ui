import * as ROSLIB from 'roslib'

const ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090',
});

const powerTopic = new ROSLIB.Topic({
    ros: ros,
    name: '/power_info',
    messageType: 'power_measurement/Ina228Sensor',
});

const brightnessTopic = new ROSLIB.Topic({
    ros: ros,
    name: '/brightness_info',
    messageType: 'std_msgs/Float32'
})

const cmdVelTopic = new ROSLIB.Topic({
  ros: ros,
  name: "/cmd_vel",
  messageType: "geometry_msgs/Twist",
});

const publishTwist = (linearX: number, linearY: number,  angularZ: number) => {
  const twist = new ROSLIB.Message({
    linear: {
      x: linearX,
      y: linearY,
      z: 0,
    },
    angular: {
      x: 0,
      y: 0,
      z: angularZ,
    },
  });
  cmdVelTopic.publish(twist);
};

export { ros, powerTopic, brightnessTopic, publishTwist};
