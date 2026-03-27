/**
 * @typedef {Object} ColorSwatch
 * @property {string} hex
 * @property {string} name
 * @property {string} role
 */

/**
 * @typedef {Object} SocialPlatform
 * @property {string} name
 * @property {boolean} likely
 * @property {"high"|"medium"|"low"} strength
 * @property {string} notes
 */

/**
 * @typedef {Object} SEOData
 * @property {number} score
 * @property {string} summary
 * @property {string[]} strengths
 * @property {string[]} weaknesses
 * @property {string[]} recommendations
 * @property {string[]} keywords
 */

/**
 * @typedef {Object} BrandData
 * @property {string} summary
 * @property {ColorSwatch[]} palette
 * @property {string[]} personality
 * @property {string} typography
 * @property {string} tone
 */

/**
 * @typedef {Object} MarketingData
 * @property {number} score
 * @property {string} summary
 * @property {string[]} currentApproach
 * @property {string[]} opportunities
 * @property {string} contentStrategy
 * @property {string} cta
 */

/**
 * @typedef {Object} SocialData
 * @property {number} score
 * @property {string} summary
 * @property {SocialPlatform[]} platforms
 * @property {string[]} recommendations
 */

/**
 * @typedef {Object} Demographics
 * @property {string} ageRange
 * @property {string} gender
 * @property {string} income
 * @property {string} education
 * @property {string} location
 */

/**
 * @typedef {Object} AudienceData
 * @property {string} summary
 * @property {string} primarySegment
 * @property {Demographics} demographics
 * @property {string[]} psychographics
 * @property {string[]} painPoints
 * @property {string[]} buyingMotivations
 */

/**
 * @typedef {Object} AnalysisResult
 * @property {string} company
 * @property {string} overview
 * @property {SEOData} seo
 * @property {BrandData} brand
 * @property {MarketingData} marketing
 * @property {SocialData} social
 * @property {AudienceData} audience
 */
