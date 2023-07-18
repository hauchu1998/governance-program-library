import { Program, Provider } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import { NftVoter, IDL } from './nft_voter';

export const NFT_VOTER_ID = new PublicKey(
  'GnftVc21v2BRchsRa9dGdrVmJPLZiRHe9j2offnFTZFg',
);

export class NftVoterClient {
  constructor(public program: Program<NftVoter>, public devnet?: boolean) { }

  static connect(
    provider: Provider,
    devnet?: boolean,
    programId = NFT_VOTER_ID,
  ): NftVoterClient {
    return new NftVoterClient(
      new Program<NftVoter>(IDL, programId, provider),
      devnet,
    );
  }
}
