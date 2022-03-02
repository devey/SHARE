function getConfig() {
    let config = {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
    }

    return config
}

export const { nodeUrl, networkId, walletUrl } = getConfig()

export function getContractMethods(contractName: string) {
    switch (contractName) {
        case 'ft':
            return {
                changeMethods: [],
                viewMethods: [
                    'ft_balance_of',
                    'get_treasury',
                    'ft_total_supply',
                ],
            }
        case 'nft':
            return {
                changeMethods: [
                    'set_bid',
                    'remove_bid',
                    'accept_bid',
                    'generate',
                    'claim_media',
                    'burn_design',
                    'mint',
                ],
                viewMethods: [
                    'nft_total_supply',
                    'nft_metadata',
                    'nft_token',
                    'nft_tokens_for_owner',
                    'nft_tokens',
                    'view_media',
                    'nft_supply_for_owner',
                    'get_bids',
                    'get_bidder_bids',
                    'nft_metadata_extra',
                ],
            }
        case 'market':
            return {
                changeMethods: [],
                viewMethods: ['get_bids', 'get_bidders_bids'],
            }

        default:
            return {}
    }
}