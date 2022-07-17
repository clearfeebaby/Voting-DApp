// import getWeb3 from "../getWeb3";
// import VotingContract from "../contracts/Voting.json";

async function Toto() {
    const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = VotingContract.networks[networkId];
      const instance = new web3.eth.Contract(
        VotingContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
    return (
      <>
        <div>toto</div>
      </>
    );
}

export default Toto;
