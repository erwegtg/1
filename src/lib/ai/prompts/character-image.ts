export function buildCharacterTurnaroundPrompt(description: string): string {
  return `Everyday snapshot-style portrait photography, professional CCD camera with flash (not selfie). Character four-view reference sheet for production pipeline.

=== CHARACTER ===
${description}

=== LAYOUT ===
Four portrait photographs arranged LEFT to RIGHT on a single pure white canvas:
1. FRONT VIEW — facing camera directly, half-body (waist-up) shot
2. THREE-QUARTER VIEW — turned ~45° to the right, showing depth and facial dimensionality
3. SIDE PROFILE VIEW — perfect 90° profile facing right, showing hairstyle and silhouette
4. BACK VIEW — facing away from camera, revealing hairstyle and back details

=== PHOTOGRAPHY STYLE ===
- Everyday snapshot aesthetic: professional CCD camera + studio flash, not smartphone selfie
- Clean pure white studio backdrop across all four shots — no environment, no distractions
- Even frontal flash lighting that reveals skin texture, fabric detail, and hair strands
- Low saturation, slightly desaturated color tone — realistic and film-like, not HDR or oversaturated
- Half-body close-up framing (head to waist) consistent across all four shots

=== CONSISTENCY REQUIREMENTS ===
- All four views: IDENTICAL character — same face structure, hair, skin tone, outfit, accessories, and proportions
- Same framing height across all four shots — heads aligned at top, waist at bottom
- Natural resting expression with subtle personality showing through
- Relaxed, natural posture — not stiff, not posed dramatically

=== QUALITY ===
Professional quality, photorealistic, no artifacts, no AI tells. This is the definitive character reference that all future generated frames must match exactly.`;
}
