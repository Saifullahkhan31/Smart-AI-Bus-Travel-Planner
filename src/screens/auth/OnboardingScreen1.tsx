import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { Spacing, BorderRadius } from '../../constants/spacing';
import { Typography } from '../../constants/typography';

// SCREEN NAME: OnboardingScreen1
// FIGMA FRAME: Onboarding Screen 1
// ROUTE: Onboarding1

interface Props {
  navigation: any;
}

// Comfort Ring Component
function ComfortRing({ score = 89 }: { score?: number }) {
  return (
    <View style={styles.comfortRing}>
      <View style={styles.comfortRingInner}>
        <Text style={styles.comfortScore}>{score}</Text>
        <Text style={styles.comfortLabel}>Comfort</Text>
      </View>
    </View>
  );
}

// Simplified Bus Illustration (SVG replacement)
function BusIllustration() {
  return (
    <View style={styles.busContainer}>
      {/* Road */}
      <View style={styles.road} />

      {/* Bus body */}
      <View style={styles.busShadow} />
      <View style={styles.busBody}>
        {/* Destination board */}
        <View style={styles.busDestination}>
          <Text style={styles.busDestinationText}>Bus #14</Text>
        </View>

        {/* Windshield */}
        <View style={styles.busWindshield} />

        {/* Blue stripe */}
        <View style={styles.busStripe} />

        {/* Route number */}
        <View style={styles.busRouteNumber}>
          <Text style={styles.busRouteNumberText}>14</Text>
        </View>
      </View>

      {/* Wheels */}
      <View style={[styles.wheel, { left: '25%' }]} />
      <View style={[styles.wheel, { right: '25%' }]} />
    </View>
  );
}

export default function OnboardingScreen1({ navigation }: Props) {
  const cardTranslateAnim = useRef(new Animated.Value(28)).current;
  const cardOpacityAnim = useRef(new Animated.Value(0)).current;
  const chipLeftTranslateAnim = useRef(new Animated.Value(-14)).current;
  const chipLeftOpacityAnim = useRef(new Animated.Value(0)).current;
  const chipRightTranslateAnim = useRef(new Animated.Value(14)).current;
  const chipRightOpacityAnim = useRef(new Animated.Value(0)).current;
  const textTranslateAnim = useRef(new Animated.Value(18)).current;
  const textOpacityAnim = useRef(new Animated.Value(0)).current;
  const badgeOpacityAnim = useRef(new Animated.Value(0.88)).current;

  useEffect(() => {
    // Card animation
    Animated.timing(cardTranslateAnim, {
      toValue: 0,
      duration: 650,
      delay: 80,
      useNativeDriver: false,
    }).start();

    Animated.timing(cardOpacityAnim, {
      toValue: 1,
      duration: 650,
      delay: 80,
      useNativeDriver: false,
    }).start();

    // Left chip
    Animated.timing(chipLeftTranslateAnim, {
      toValue: 0,
      duration: 550,
      delay: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(chipLeftOpacityAnim, {
      toValue: 1,
      duration: 550,
      delay: 500,
      useNativeDriver: false,
    }).start();

    // Right chip
    Animated.timing(chipRightTranslateAnim, {
      toValue: 0,
      duration: 550,
      delay: 450,
      useNativeDriver: false,
    }).start();

    Animated.timing(chipRightOpacityAnim, {
      toValue: 1,
      duration: 550,
      delay: 450,
      useNativeDriver: false,
    }).start();

    // Text content
    Animated.timing(textTranslateAnim, {
      toValue: 0,
      duration: 600,
      delay: 380,
      useNativeDriver: false,
    }).start();

    Animated.timing(textOpacityAnim, {
      toValue: 1,
      duration: 600,
      delay: 380,
      useNativeDriver: false,
    }).start();

    // Badge shimmer
    const badgeLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(badgeOpacityAnim, {
          toValue: 1,
          duration: 1400,
          useNativeDriver: false,
        }),
        Animated.timing(badgeOpacityAnim, {
          toValue: 0.88,
          duration: 1400,
          useNativeDriver: false,
        }),
      ])
    );

    badgeLoop.start();

    return () => badgeLoop.stop();
  }, []);

  const handleSkip = () => {
    navigation.replace('OnboardingStack', { screen: 'Onboarding3' });
  };

  const handleNext = () => {
    navigation.navigate('OnboardingStack', { screen: 'Onboarding2' });
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Skip button */}
        <TouchableOpacity
          onPress={handleSkip}
          style={styles.skipButton}
          activeOpacity={0.7}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        {/* Illustration Card */}
        <Animated.View
          style={[
            styles.illustrationCard,
            {
              transform: [{ translateY: cardTranslateAnim }],
              opacity: cardOpacityAnim,
            },
          ]}
        >
          <View style={styles.cardBackground} />

          {/* Bus illustration */}
          <BusIllustration />

          {/* Left chip - Bus info */}
          <Animated.View
            style={[
              styles.chipLeft,
              {
                transform: [{ translateX: chipLeftTranslateAnim }],
                opacity: chipLeftOpacityAnim,
              },
            ]}
          >
            <View style={styles.chipIcon}>
              <Ionicons name="location" size={13} color={Colors.primary} />
            </View>
            <View>
              <Text style={styles.chipTitle}>Bus #14</Text>
              <Text style={styles.chipSubtitle}>4 min away</Text>
            </View>
          </Animated.View>

          {/* Right chip - Crowd and Comfort */}
          <Animated.View
            style={[
              styles.chipRight,
              {
                transform: [{ translateX: chipRightTranslateAnim }],
                opacity: chipRightOpacityAnim,
              },
            ]}
          >
            {/* Low Crowd pill */}
            <View style={styles.crowdPill}>
              <Text style={styles.crowdDot}>●</Text>
              <Text style={styles.crowdText}>Low Crowd</Text>
            </View>
            {/* Comfort ring */}
            <ComfortRing score={89} />
          </Animated.View>
        </Animated.View>

        {/* Slide indicators */}
        <View style={styles.indicators}>
          <View style={[styles.indicator, styles.indicatorActive]} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>

        {/* Text content */}
        <Animated.View
          style={[
            styles.textContent,
            {
              transform: [{ translateY: textTranslateAnim }],
              opacity: textOpacityAnim,
            },
          ]}
        >
          {/* AI Badge */}
          <Animated.View
            style={[
              styles.aiBadge,
              { opacity: badgeOpacityAnim },
            ]}
          >
            <Text style={styles.badgeSparkle}>✦</Text>
            <Text style={styles.badgeText}>AI-Powered Predictions</Text>
          </Animated.View>

          {/* Title */}
          <Text style={styles.title}>Know Before You Go</Text>

          {/* Description */}
          <Text style={styles.description}>
            Our AI predicts crowd levels and comfort scores for every bus, so you always travel smart.
          </Text>
        </Animated.View>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Bottom CTA */}
        <Animated.View
          style={[
            styles.ctaContainer,
            {
              transform: [{ translateY: textTranslateAnim }],
              opacity: textOpacityAnim,
            },
          ]}
        >
          <TouchableOpacity
            onPress={handleNext}
            style={styles.primaryButton}
            activeOpacity={0.88}
          >
            <Text style={styles.buttonText}>Next →</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogin} activeOpacity={0.7}>
            <Text style={styles.loginLink}>
              Already have an account?{' '}
              <Text style={styles.loginLinkBold}>Log In</Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.screenPadding,
    paddingBottom: Spacing.safeBottom,
    minHeight: '100%',
  },
  skipButton: {
    position: 'absolute',
    top: Spacing.xl + 20,
    right: Spacing.screenPadding,
    zIndex: 10,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
  },
  skipText: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
  },
  illustrationCard: {
    marginTop: 80,
    height: 334,
    borderRadius: BorderRadius.xxl,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 12,
      elevation: 3,
    },
  },
  cardBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#F0F7FF',
  },
  busContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: Spacing.lg,
  },
  busShadow: {
    position: 'absolute',
    bottom: 30,
    width: 200,
    height: 20,
    backgroundColor: 'rgba(59,130,246,0.07)',
    borderRadius: BorderRadius.full,
  },
  busBody: {
    width: 220,
    height: 120,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  busDestination: {
    backgroundColor: '#1E293B',
    paddingVertical: Spacing.sm,
    alignItems: 'center',
    borderBottomLeftRadius: BorderRadius.md,
    borderBottomRightRadius: BorderRadius.md,
  },
  busDestinationText: {
    ...Typography.bodyMedium,
    color: Colors.white,
    fontSize: 12,
  },
  busWindshield: {
    height: 50,
    backgroundColor: '#BFDBFE',
    margin: Spacing.md,
    marginBottom: Spacing.sm,
    borderRadius: BorderRadius.md,
  },
  busStripe: {
    height: 20,
    backgroundColor: Colors.primary,
  },
  busRouteNumber: {
    position: 'absolute',
    bottom: Spacing.md,
    left: Spacing.md,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.md,
  },
  busRouteNumberText: {
    ...Typography.bodyMedium,
    color: Colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  wheel: {
    position: 'absolute',
    bottom: 0,
    width: 30,
    height: 30,
    borderRadius: BorderRadius.full,
    backgroundColor: '#1E293B',
  },
  road: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    backgroundColor: '#E4EDF8',
  },
  chipLeft: {
    position: 'absolute',
    bottom: Spacing.xl,
    left: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    gap: Spacing.md,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.09,
      shadowRadius: 14,
      elevation: 3,
    },
  },
  chipIcon: {
    width: 26,
    height: 26,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.primaryTint,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipTitle: {
    ...Typography.captionMedium,
    color: Colors.textPrimary,
  },
  chipSubtitle: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  chipRight: {
    position: 'absolute',
    top: Spacing.lg,
    right: Spacing.lg,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    gap: Spacing.md,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.09,
      shadowRadius: 14,
      elevation: 3,
    },
  },
  crowdPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    backgroundColor: Colors.successTint,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
  },
  crowdDot: {
    color: Colors.success,
    fontSize: 10,
  },
  crowdText: {
    ...Typography.captionMedium,
    color: Colors.success,
  },
  comfortRing: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.comfortTint,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.comfort,
  },
  comfortRingInner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  comfortScore: {
    ...Typography.captionMedium,
    color: Colors.textPrimary,
    fontSize: 12,
    fontWeight: '700',
  },
  comfortLabel: {
    ...Typography.tiny,
    color: Colors.textMuted,
    fontSize: 9,
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.sm,
    marginTop: Spacing.xl,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: BorderRadius.full,
    backgroundColor: '#CBD5E1',
  },
  indicatorActive: {
    width: 24,
    backgroundColor: Colors.primary,
  },
  textContent: {
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  aiBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    backgroundColor: Colors.primaryTint,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  badgeSparkle: {
    fontSize: 11,
    color: Colors.primary,
    fontWeight: '600',
  },
  badgeText: {
    ...Typography.captionMedium,
    color: Colors.primary,
  },
  title: {
    ...Typography.h1,
    color: Colors.textPrimary,
    marginTop: Spacing.md,
    textAlign: 'center',
  },
  description: {
    ...Typography.body,
    color: Colors.textSecondary,
    marginTop: Spacing.md,
    textAlign: 'center',
    lineHeight: 23,
  },
  ctaContainer: {
    gap: 0,
    marginTop: Spacing.xxxl,
  },
  primaryButton: {
    width: '100%',
    height: 52,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...{
      shadowColor: Colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 6,
    },
  },
  buttonText: {
    ...Typography.buttonLabel,
    color: Colors.white,
  },
  loginLink: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: Spacing.lg,
  },
  loginLinkBold: {
    color: Colors.primary,
    fontWeight: '600',
  },
});
