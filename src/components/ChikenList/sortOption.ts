const sortOptions: SortOptionType[] = [
    { value: 'lowest_count', label: 'Lowest#' },
    { value: 'highest_count', label: 'Highest#' },
    { value: 'lowest_weight', label: 'Lowest KG' },
    { value: 'highest_weight', label: 'Highest KG' },
    { value: 'lowest_rarity', label: 'Lowest rarity' },
    { value: 'highest_rarity', label: 'Highest rarity' }
]

export interface SortOptionType {
    value: string,
    label: string
}

export default sortOptions;