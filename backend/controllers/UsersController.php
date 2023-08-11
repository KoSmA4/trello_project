<?php

namespace app\controllers;

use app\models\Users;
use Yii;
use yii\filters\ContentNegotiator;
use yii\filters\Cors;
use yii\web\Response;
use yii\web\Controller;

class UsersController extends Controller
{
    public function actionIndex(){
        echo "HI";
    }
    public function behaviors()
    {
        return [
            'corsFilter' => [
                'class' => Cors::class,
                'cors' => [
                    'Origin' => ['http://localhost:8080'],
                    'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
                    'Access-Control-Request-Headers' => ['*'],
                    'Access-Control-Allow-Credentials' => false,
                ],
            ],
        ];
    }
    public function actionRegister()
    {
        if (Yii::$app->getRequest()->getMethod() === 'OPTIONS') {
            Yii::$app->getResponse()->getHeaders()->set('Allow', 'POST, OPTIONS');
            Yii::$app->getResponse()->getHeaders()->set('Access-Control-Allow-Headers', '*');
            Yii::$app->getResponse()->getHeaders()->set('Access-Control-Allow-Origin', 'http://localhost:8080'); // Замените на ваш домен фронтенда
            Yii::$app->getResponse()->getHeaders()->set('Access-Control-Allow-Methods', 'POST, OPTIONS');
            Yii::$app->end();
        }
        $request = Yii::$app->request;
        var_dump($request);
    }
}