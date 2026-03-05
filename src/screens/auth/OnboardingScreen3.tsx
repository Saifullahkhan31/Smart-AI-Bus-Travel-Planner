import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Colors } from '../../constants/colors';
import { Spacing, BorderRadius } from '../../constants/spacing';
import { Typography } from '../../constants/typography';

// SCREEN NAME: OnboardingScreen3
// FIGMA FRAME: Onboarding Screen 3
// ROUTE: Onboarding3

interface Props {
  navigation: any;
}

// Map illustration component
function MapIllustration() {
  return (
    <View style={styles.mapContainer}>
      {/* Map background */}
      <View style={styles.mapBackground} />

      {/* Roads grid - simplified top-down map */}
      <View style={styles.roadsContainer}>
        {/* Horizontal roads */}
        <View style={[styles.road, styles.roadHorizontal, { top: '25%' }]} />
        <View style={[styles.road, styles.roadHorizontal, { top: '50%' }]} />
        <View style={[styles.road, styles.roadHorizontal, { bottom: '25%' }]} />

        {/* Vertical roads */}
        <View style={[styles.road, styles.roadVertical, { left: '20%' }]} />
        <View style={[styles.road, styles.roadVertical, { right: '20%' }]} />
      </View>

      {/* Buildings */}
      <View style={[styles.building, { top: '8%', left: '8%', width: 40, height: 50 }]} />
      <View style={[styles.building, { top: '8%', right: '8%', width: 50, height: 45 }]} />
      <View style={[styles.building, { bottom: '15%', left: '8%', width: 45, height: 45 }]} />
      <View style={[styles.building, { bottom: '15%', right: '8%', width: 40, height: 50 }]} />
      <View style={[styles.building, styles.buildingGreen, { top: '35%', left: '30%', width: 30, height: 35 }]} />

      {/* Route path - animated dashed line */}
      <Animated.View style={styles.routePath} />

      {/* Origin point (pulsing dot) */}
      <View style={styles.originContainer}>
        <View style={styles.originRipple1} />
        <View style={styles.originRipple2} />
        <View style={styles.originDot} />
      </View>

      {/* Bus icon - animated */}
      <Animated.View style={styles.busIcon}>
        <View style={styles.busMini} />
        <Text style={styles.busRoute}>14</Text>
      </Animated.View>

      {/* Destination pin (red) */}
      <View style={styles.destinationPin} />

      {/* Labels */}
      <View style={styles.originLabel}>
        <Text style={styles.labelText}>📍 IoBM</Text>
      </View>

      <View style={styles.destinationLabel}>
        <Text style={styles.labelText}>🏁 Gulshan</Text>
      </View>

      {/* Suggested trip chip - top left */}
      <View style={styles.chipTopLeft}>
        <View style={styles.chipAccent} />
        <View style={styles.chipContent}>
          <Text style={styles.chipTitle}>🔁 Suggested Trip</Text>
          <Text style={styles.chipRoute}>IoBM → Gulshan</Text>
          <Text style={styles.chipCaption}>Based on your routine</Text>
        </View>
      </View>

      {/* Warning chip - top right */}
      <View style={styles.chipTopRight}>
        <View style={[styles.chipAccent, { backgroundColor: Colors.warning }]} />
        <View style={styles.chipContent}>
          <Text style={styles.chipTitleWarning}>⚠ Bus #7</Text>
          <Text style={styles.chipWarning}>nearing capacity</Text>
        </View>
      </View>
    </View>
  );
}

export default function OnboardingScreen3({ navigation }: Props) {
  const cardTranslateAnim = useRef(new Animated.Value(28)).current;
  const cardOpacityAnim = useRef(new Animated.Value(0)).current;
  const chipLeftTranslateAnim = useRef(new Animated.Value(-16)).current;
  const chipLeftOpacityAnim = useRef(new Animated.Value(0)).current;
  const chipRightTranslateAnim = useRef(new Animated.Value(16)).current;
  const chipRightOpacityAnim = useRef(new Animated.Value(0)).current;
  const textTranslateAnim = useRef(new Animated.Value(18)).current;
  const textOpacityAnim = useRef(new Animated.Value(0)).current;
  const busSlideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Card animation
    Animated.timing(cardTranslateAnim, {
      toValue: 0,
      duration: 650,
      delay: 60,
      useNativeDriver: false,
    }).start();

    Animated.timing(cardOpacityAnim, {
      toValue: 1,
      duration: 650,
      delay: 60,
      useNativeDriver: false,
    }).start();

    // Left chip
    Animated.timing(chipLeftTranslateAnim, {
      toValue: 0,
      duration: 500,
      delay: 400,
      useNativeDriver: false,
    }).start();

    Animated.timing(chipLeftOpacityAnim, {
      toValue: 1,
      duration: 500,
      delay: 400,
      useNativeDriver: false,
    }).start();

    // Right chip
    Animated.timing(chipRightTranslateAnim, {
      toValue: 0,
      duration: 500,
      delay: 460,
      useNativeDriver: false,
    }).start();

    Animated.timing(chipRightOpacityAnim, {
      toValue: 1,
      duration: 500,
      delay: 460,
      useNativeDriver: false,
    }).start();

    // Text content
    Animated.timing(textTranslateAnim, {
      toValue: 0,
      duration: 600,
      delay: 360,
      useNativeDriver: false,
    }).start();

    Animated.timing(textOpacityAnim, {
      toValue: 1,
      duration: 600,
      delay: 360,
      useNativeDriver: false,
    }).start();

    // Bus slide animation
    const busLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(busSlideAnim, {
          toValue: 8,
          duration: 1750,
          useNativeDriver: false,
        }),
        Animated.timing(busSlideAnim, {
          toValue: 0,
          duration: 1750,
          useNativeDriver: false,
        }),
      ])
    );

    busLoop.start();

    return () => busLoop.stop();
  }, []);

  const handleSkip = () => {
    navigation.replace('Login');
  };

  const handleNext = () => {
    navigation.replace('Login');
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

          {/* Map illustration */}
          <MapIllustration />
        </Animated.View>

        {/* Slide indicators */}
        <View style={styles.indicators}>
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={[styles.indicator, styles.indicatorActive]} />
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
          {/* Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeEmoji}>📍</Text>
            <Text style={styles.badgeText}>Real-Time Tracking</Text>
          </View>

          {/* Title */}
          <Text style={styles.title}>Always In The Loop</Text>

          {/* Description */}
          <Text style={styles.description}>
            Track your bus live, get crowd alerts, and let our AI learn your routine to suggest trips automatically.
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
            <Text style={styles.buttonText}>
              Get Started <Text style={styles.sparkle}>✦</Text>
            </Text>
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
    backgroundColor: '#EFF6FF',
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  mapBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#F1F5F9',
  },
  roadsContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  road: {
    position: 'absolute',
    backgroundColor: '#F1F5F9',
  },
  roadHorizontal: {
    width: '100%',
    height: 14,
  },
  roadVertical: {
    width: 18,
    height: '100%',
  },
  building: {
    position: 'absolute',
    backgroundColor: '#E2E8F0',
    borderRadius: BorderRadius.sm,
  },
  buildingGreen: {
    backgroundColor: '#DCFCE7',
  },
  routePath: {
    position: 'absolute',
    left: '20%',
    top: '55%',
    width: '60%',
    height: 3,
    backgroundColor: Colors.primary,
    opacity: 0.6,
  },
  originContainer: {
    position: 'absolute',
    bottom: '20%',
    left: '25%',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  originRipple1: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary,
    opacity: 0.15,
  },
  originRipple2: {
    position: 'absolute',
    width: 26,
    height: 26,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary,
    opacity: 0.08,
  },
  originDot: {
    width: 10,
    height: 10,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary,
  },
  busIcon: {
    position: 'absolute',
    top: '45%',
    left: '45%',
    width: 30,
    height: 20,
  },
  busMini: {
    width: 30,
    height: 16,
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  busRoute: {
    ...Typography.captionMedium,
    color: Colors.white,
    fontSize: 8,
    fontWeight: '700',
  },
  destinationPin: {
    position: 'absolute',
    top: '15%',
    right: '18%',
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 14,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.error,
  },
  originLabel: {
    position: 'absolute',
    bottom: '18%',
    left: '18%',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.xs,
    paddingVertical: 3,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 2,
    },
  },
  destinationLabel: {
    position: 'absolute',
    top: '12%',
    right: '12%',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.xs,
    paddingVertical: 3,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 2,
    },
  },
  labelText: {
    ...Typography.tiny,
    color: Colors.textPrimary,
    fontSize: 8,
    fontWeight: '600',
  },
  chipTopLeft: {
    position: 'absolute',
    top: Spacing.md,
    left: Spacing.md,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
    maxWidth: 160,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.09,
      shadowRadius: 14,
      elevation: 3,
    },
  },
  chipTopRight: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
    maxWidth: 140,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.09,
      shadowRadius: 14,
      elevation: 3,
    },
  },
  chipAccent: {
    width: 3,
    backgroundColor: Colors.primary,
  },
  chipContent: {
    padding: Spacing.md,
    gap: 2,
  },
  chipTitle: {
    ...Typography.tiny,
    color: Colors.textPrimary,
    fontSize: 9,
    fontWeight: '700',
  },
  chipTitleWarning: {
    ...Typography.tiny,
    color: Colors.warning,
    fontSize: 9,
    fontWeight: '700',
  },
  chipRoute: {
    ...Typography.tiny,
    color: Colors.primary,
    fontSize: 8.5,
    fontWeight: '600',
  },
  chipWarning: {
    ...Typography.tiny,
    color: Colors.warning,
    fontSize: 8.5,
    fontWeight: '500',
  },
  chipCaption: {
    ...Typography.tiny,
    color: Colors.textMuted,
    fontSize: 8,
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
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    backgroundColor: Colors.successTint,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  badgeEmoji: {
    fontSize: 11,
  },
  badgeText: {
    ...Typography.captionMedium,
    color: Colors.success,
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
    textAlign: 'center',
  },
  sparkle: {
    fontSize: 12,
    opacity: 0.9,
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
