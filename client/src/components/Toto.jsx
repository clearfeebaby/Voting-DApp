import useEth from "../contexts/EthContext/useEth";
import { useRef, useEffect, useState } from "react";

function Toto() {

  const { state: { contract, accounts } } = useEth();
  const state = useEth();
  // const { contract, accounts } = state
  const [currentStep, setCurrentStep] = useState(null);

  const workflowStatus = [
    'Enregistrement des électeurs',
    'Enregistrement des propositions',
    'Fin des propositions',
    'Enregistrement des votes',
    'Fin des votes',
    'Comptage'
  ];

  const getCurrentStep = async () => {
    try {
      await contract.methods.workflowStatus().call({ from: accounts[0] }).then(
        (r) => {
          setCurrentStep(r);
        }
      );
    } catch (error) {
    }
  }

  getCurrentStep();

  return (
    <>
      <div>{workflowStatus[currentStep]}</div>
      <div>{accounts}</div>
      {/* <div>toto</div> */}
    </>
  );
}

export default Toto;
