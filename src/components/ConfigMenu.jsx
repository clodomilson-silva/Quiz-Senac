import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import styled from 'styled-components';

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  backdrop-filter: blur(5px);
`;

const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 80px;
  right: 20px;
  width: clamp(320px, 90vw, 400px);
  background: rgba(44, 62, 80, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1002;
  font-family: 'Poppins', 'Inter', system-ui, sans-serif;

  @media (max-width: 768px) {
    top: 70px;
    right: 15px;
    left: 15px;
    width: auto;
  }
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

const ContactSection = styled.div`
  margin-bottom: 20px;

  h3 {
    color: #E60012;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }

  .icon {
    width: 20px;
    height: 20px;
    color: #E60012;
  }

  .content {
    flex: 1;

    .label {
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 2px;
    }

    .value {
      font-size: 0.85rem;
      opacity: 0.8;
      word-break: break-all;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SocialButton = styled.button`
  background: rgba(230, 0, 18, 0.1);
  border: 1px solid rgba(230, 0, 18, 0.3);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  color: #E60012;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(230, 0, 18, 0.2);
    transform: scale(1.1);
    border-color: rgba(230, 0, 18, 0.5);
  }
`;

const FooterText = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const ConfigMenu = ({ onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <MenuOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />
      <MenuContainer
        ref={menuRef}
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <MenuHeader>
          <h2>Contatos Senac</h2>
          <CloseButton onClick={onClose}>
            <X size={18} />
          </CloseButton>
        </MenuHeader>

        <ContactSection>
          <h3>
            <MapPin size={20} />
            Senac Maranhão
          </h3>
          <ContactItem>
            <Phone className="icon" />
            <div className="content">
              <div className="label">Telefone Principal</div>
              <div className="value">(98) 3218-9090</div>
            </div>
          </ContactItem>
          <ContactItem>
            <Mail className="icon" />
            <div className="content">
              <div className="label">E-mail Institucional</div>
              <div className="value">senac@ma.senac.br</div>
            </div>
          </ContactItem>
          <ContactItem>
            <MapPin className="icon" />
            <div className="content">
              <div className="label">Endereço</div>
              <div className="value">Rua do Egito, 264 - Centro, São Luís - MA</div>
            </div>
          </ContactItem>
          <ContactItem>
            <Globe className="icon" />
            <div className="content">
              <div className="label">Site Oficial</div>
              <div className="value">www.ma.senac.br</div>
            </div>
          </ContactItem>
        </ContactSection>

        <ContactSection>
          <h3>
            <Phone size={20} />
            EXPO Indústria 2025
          </h3>
          <ContactItem>
            <Mail className="icon" />
            <div className="content">
              <div className="label">Informações do Evento</div>
              <div className="value">expoindustria@ma.senac.br</div>
            </div>
          </ContactItem>
          <ContactItem>
            <Phone className="icon" />
            <div className="content">
              <div className="label">Suporte Técnico</div>
              <div className="value">(98) 99999-9999</div>
            </div>
          </ContactItem>
        </ContactSection>

        <SocialLinks>
          <SocialButton onClick={() => handleSocialClick('https://facebook.com/senacmaranhao')}>
            <Facebook size={20} />
          </SocialButton>
          <SocialButton onClick={() => handleSocialClick('https://instagram.com/senacmaranhao')}>
            <Instagram size={20} />
          </SocialButton>
          <SocialButton onClick={() => handleSocialClick('https://linkedin.com/company/senac-maranhao')}>
            <Linkedin size={20} />
          </SocialButton>
        </SocialLinks>

        <FooterText>
          Quiz Interativo - EXPO Indústria Maranhão 2025
        </FooterText>
      </MenuContainer>
    </AnimatePresence>
  );
};

export default ConfigMenu;