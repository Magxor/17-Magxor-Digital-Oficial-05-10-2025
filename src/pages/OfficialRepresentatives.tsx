import React, { useState, useEffect } from 'react';
import { Shield, Lock, Users, Calendar, CheckCircle, XCircle, Eye, EyeOff } from 'lucide-react';

interface Representative {
  ID: string;
  NOMBRE: string;
  APELLIDO: string;
  'FECHA DE EMISION': string;
  VENCIMIENTO: string;
  'FOTO DE CREDENCIAL': string;
  ESTADO: string;
  CONTRASEÑA: string; // Contraseña individual
}

export function OfficialRepresentatives() {
  // Estados de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [idInput, setIdInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Datos
  const [representatives, setRepresentatives] = useState<Representative[]>([]);
  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState('');

  // Representante autenticado (solo uno) o null si es maestra
  const [authenticatedRep, setAuthenticatedRep] = useState<Representative | null>(null);
  // Flag para indicar si se autenticó con contraseña maestra
  const [isMaster, setIsMaster] = useState(false);

  const MASTER_PASSWORD = 'representantesmagxor';

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!passwordInput.trim()) {
      setErrorMessage('Por favor ingresa una contraseña.');
      return;
    }

    if (passwordInput === MASTER_PASSWORD) {
      // Contraseña maestra: no se requiere ID, autenticación exitosa
      setIsAuthenticated(true);
      setErrorMessage('');
      setPasswordInput('');
      setIdInput('');
      setAuthenticatedRep(null);
      setIsMaster(true);
      return;
    }

    // Si no es maestra, sí se requiere ID
    if (!idInput.trim()) {
      setErrorMessage('Por favor ingresa un número de ID.');
      return;
    }

    // Buscar representante por ID (case insensitive)
    const rep = representatives.find(r => r.ID.toLowerCase() === idInput.trim().toLowerCase());

    if (!rep) {
      setErrorMessage('ID no encontrado.');
      return;
    }

    // Verificar contraseña individual
    if (passwordInput === rep.CONTRASEÑA) {
      setIsAuthenticated(true);
      setErrorMessage('');
      setPasswordInput('');
      setIdInput('');
      setAuthenticatedRep(rep);
      setIsMaster(false);
    } else {
      setErrorMessage('Contraseña incorrecta. Inténtalo de nuevo.');
      setPasswordInput('');
    }
  };

  const parseCSV = (csvText: string): Representative[] => {
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    const data: Representative[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
      if (values.length === headers.length) {
        const rep: any = {};
        headers.forEach((header, idx) => {
          rep[header] = values[idx];
        });
        data.push(rep as Representative);
      }
    }
    return data;
  };

  useEffect(() => {
    setLoading(true);
    setDataError('');

    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSLQ_v0n9myTCmXNz59PFI811c0JgLngpAoPbo2cTpMHF8Ix1V-gBe0HurWr2MWv9bjEXAO_j6TV21O/pub?gid=0&single=true&output=csv';

    fetch(csvUrl)
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los datos');
        return res.text();
      })
      .then(text => {
        const parsed = parseCSV(text);
        setRepresentatives(parsed);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setDataError('Error al cargar los datos de los representantes. Inténtalo más tarde.');
        setLoading(false);
      });
  }, []);

  const getStatusColor = (status: string) => {
    switch ((status || '').toLowerCase()) {
      case 'activo':
      case 'verificado':
        return 'text-green-500 bg-green-500/10 border-green-500';
      case 'inactivo':
      case 'suspendido':
        return 'text-red-500 bg-red-500/10 border-red-500';
      case 'pendiente':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500';
      default:
        return 'text-gray-500 bg-gray-500/10 border-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch ((status || '').toLowerCase()) {
      case 'activo':
      case 'verificado':
        return <CheckCircle className="w-4 h-4" />;
      case 'inactivo':
      case 'suspendido':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  // Formulario de login
  if (!isAuthenticated) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <Lock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-white mb-2">Área Restringida</h1>
                <p className="text-gray-400">
                  Ingresa tu Número de ID y contraseña para acceder a tu información
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  (Si usas la contraseña maestra, no es necesario ingresar ID)
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div>
                  <label htmlFor="id" className="block text-sm font-medium text-gray-300 mb-2">
                    Número de ID (opcional si usas contraseña maestra)
                  </label>
                  <input
                    id="id"
                    type="text"
                    value={idInput}
                    onChange={e => setIdInput(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Ingresa tu número de ID"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={passwordInput}
                      onChange={e => setPasswordInput(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors pr-12"
                      placeholder="Ingresa tu contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 flex items-center space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-red-400">{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Lock className="w-5 h-5" />
                  <span>Acceder</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vista autenticada
if (isMaster) {
  // Mostrar todos los representantes
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-20 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Representantes Oficiales
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Información oficial de todas las credenciales
          </p>
        </div>

        {loading && <p className="text-center text-gray-400">Cargando representantes...</p>}
        {dataError && (
          <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 flex items-center space-x-3 mb-6">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <span className="text-red-400">{dataError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {representatives.map(rep => (
            <div key={rep.ID} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              {/* Foto */}
              {rep['FOTO DE CREDENCIAL'] && (
                <div className="mb-6">
                  <img
                    src={rep['FOTO DE CREDENCIAL']}
                    alt={`Credencial de ${rep.NOMBRE} ${rep.APELLIDO}`}
                    className="w-full h-41 object-cover rounded-lg shadow-lg"
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-0">
                  <span className="text-white-400 text-sm">ID:</span>
                  <span className="text-blue-400 font-mono font-bold">{rep.ID}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {rep.NOMBRE} {rep.APELLIDO}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <span className="text-white-400 text-sm">Emisión:</span>
                    </div>
                    <span className="text-green-400 text-sm font-medium">{rep['FECHA DE EMISION']}</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span className="text-white-400 text-sm">Vencimiento:</span>
                    </div>
                    <span className="text-orange-400 text-sm font-medium">{rep.VENCIMIENTO}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(rep.ESTADO)}`}>
                    {getStatusIcon(rep.ESTADO)}
                    <span className="text-sm font-medium">{rep.ESTADO}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mostrar solo la info del representante autenticado individual
const rep = authenticatedRep!;
return (
  <div className="pt-16 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
    <div className="container mx-auto px-4 py-20 max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Representante <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{rep.NOMBRE} {rep.APELLIDO}</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Información oficial de tu credencial
        </p>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        {/* Foto */}
        {rep['FOTO DE CREDENCIAL'] && (
          <div className="mb-6">
            <img
              src={rep['FOTO DE CREDENCIAL']}
              alt={`Credencial de ${rep.NOMBRE} ${rep.APELLIDO}`}
              className="w-full h-41 object-cover rounded-lg shadow-lg"
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-0">
            <span className="text-white-400 text-sm">ID:</span>
            <span className="text-blue-400 font-mono font-bold">{rep.ID}</span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">
              {rep.NOMBRE} {rep.APELLIDO}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <Calendar className="w-4 h-4 text-green-500" />
                <span className="text-white-400 text-sm">Emisión:</span>
              </div>
              <span className="text-green-400 text-sm font-medium">{rep['FECHA DE EMISION']}</span>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span className="text-white-400 text-sm">Vencimiento:</span>
              </div>
              <span className="text-orange-400 text-sm font-medium">{rep.VENCIMIENTO}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(rep.ESTADO)}`}>
              {getStatusIcon(rep.ESTADO)}
              <span className="text-sm font-medium">{rep.ESTADO}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}