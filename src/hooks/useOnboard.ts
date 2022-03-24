import Onboard from 'bnc-onboard';
import { API, Subscriptions } from 'bnc-onboard/dist/src/interfaces';

const NETWORK_ID = 43114; // mainnet

const useOnboard = (subscribers: Subscriptions): API => {
    const onboard = Onboard({
        // dappId: BLOCKNATIVE_KEY,
        networkId: NETWORK_ID,
        subscriptions: {
          ...subscribers
        }
    });

    return onboard;
}

export default useOnboard;