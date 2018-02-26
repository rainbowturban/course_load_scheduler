package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.InvalidLoginAction;
import org.dselent.course_load_scheduler.client.action.LoadCreateAccountAction;
import org.dselent.course_load_scheduler.client.action.LoadHomePageAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.SendLoginAction;
import org.dselent.course_load_scheduler.client.errorstring.InvalidLoginStrings;
import org.dselent.course_load_scheduler.client.event.InvalidLoginEvent;
import org.dselent.course_load_scheduler.client.event.LoadCreateAccountEvent;
import org.dselent.course_load_scheduler.client.event.LoadHomePageEvent;
import org.dselent.course_load_scheduler.client.event.LoadLoginPageEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveCreateAccountEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveLoginEvent;
import org.dselent.course_load_scheduler.client.event.SendLoginEvent;
import org.dselent.course_load_scheduler.client.exceptions.EmptyStringException;
import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.model.User;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.presenter.LoginPagePresenter;
import org.dselent.course_load_scheduler.client.view.LoginPageView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.inject.Inject;

/**Adapted from LoginPresenterImpl from in-class example
 * @author Frank
 *
 */
public class LoginPagePresenterImpl extends BasePresenterImpl implements LoginPagePresenter{

	private LoginPageView view;
	private IndexPresenter parentPresenter;
	private boolean loginClickInProgress;

	@Inject
	public LoginPagePresenterImpl(IndexPresenter parentPresenter, LoginPageView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
		loginClickInProgress = false;
	}

	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;

		registration = eventBus.addHandler(LoadLoginPageEvent.TYPE, this);
		eventBusRegistration.put(LoadLoginPageEvent.TYPE, registration);
		
		//Capture event when a user creates their account, to take them to the login screen
		registration = eventBus.addHandler(ReceiveCreateAccountEvent.TYPE, this);
		eventBusRegistration.put(ReceiveCreateAccountEvent.TYPE, registration);

		registration = eventBus.addHandler(InvalidLoginEvent.TYPE, this);
		eventBusRegistration.put(InvalidLoginEvent.TYPE, registration);
		
		registration = eventBus.addHandler(ReceiveLoginEvent.TYPE, this);
		eventBusRegistration.put(ReceiveLoginEvent.TYPE, registration);
	}

	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}

	public IndexPresenter getParentPresenter() {
		return parentPresenter;
	}

	@Override
	public void loadCreateAccount() {
		eventBus.fireEvent(new LoadCreateAccountEvent(new LoadCreateAccountAction()));
	}

	@Override
	public void loadHomePage() {
		eventBus.fireEvent(new LoadHomePageEvent(new LoadHomePageAction()));
	}

	public void setParentPresenter(IndexPresenter parentPresenter) {
		this.parentPresenter = parentPresenter;
	}

	public LoginPageView getView() {
		return view;
	}

	@Override
	public void login() {

		if(!loginClickInProgress)
		{
			loginClickInProgress = true;
			view.getLoginButton().setEnabled(false);
			parentPresenter.showLoadScreen();

			String userName = view.getUserNameTextBox().getText();
			String password = view.getPasswordTextBox().getText();

			boolean validUserName = true;
			boolean validPassword = true;

			List<String> invalidReasonList = new ArrayList<>();

			try
			{
				validateLoginUserName(userName);
			}
			catch(EmptyStringException e)
			{
				invalidReasonList.add(InvalidLoginStrings.NULL_USER_NAME);
				validUserName = false;
			}

			try
			{
				validateLoginPassword(password);
			}
			catch(EmptyStringException e)
			{
				invalidReasonList.add(InvalidLoginStrings.NULL_PASSWORD);
				validPassword = false;
			}

			if(validUserName && validPassword)
			{
				
				sendLogin(userName, password);

			}
			else
			{
				InvalidLoginAction ila = new InvalidLoginAction(invalidReasonList);
				InvalidLoginEvent ile = new InvalidLoginEvent(ila);
				eventBus.fireEvent(ile);
			}
		}
	}
	
	//if login is invalid, it hides the loading screen and displays an alert, as well as clearing the text field for the password.
	@Override
	public void onInvalidLogin(InvalidLoginEvent evt) {
		parentPresenter.hideLoadScreen();
		view.getLoginButton().setEnabled(true);
		loginClickInProgress = false;
		Window.alert("An incorrect email or password was entered.");
		String reasons = "Reasons: ";
		for(int i = 0; i < evt.getAction().getNumberOfReasons(); i++){
			reasons += evt.getAction().getReason(i) + "\n";
		}
		Window.alert(reasons);
		view.getPasswordTextBox().setText("");
	}
	
	//if login is valid, it loads the home page
	@Override
	public void onReceiveLogin(ReceiveLoginEvent evt) {
		user = evt.getAction().getModel();
		LoadHomePageAction action = new LoadHomePageAction();
		eventBus.fireEvent(new LoadHomePageEvent(action));
	}

	@Override
	public void onReceiveCreateAccount(ReceiveCreateAccountEvent evt)
	{
		HasWidgets container = evt.getContainer();
		
		// show myself
		go(container);
		
		// use injector to get to index presenter
		// hide loading screen
		Injector.INSTANCE.getIndexPresenter().hideLoadScreen();
	}
	
	private void sendLogin(String userName, String password)
	{
		HasWidgets container = parentPresenter.getView().getViewRootPanel();
		SendLoginAction sla = new SendLoginAction(userName, password);
		SendLoginEvent sle = new SendLoginEvent(sla);//, container);
		eventBus.fireEvent(sle);
	}

	private void validateLoginUserName(String userName) throws EmptyStringException
	{
		checkEmptyString(userName);
	}

	private void validateLoginPassword(String password) throws EmptyStringException
	{
		checkEmptyString(password);
	}

	private void checkEmptyString(String string) throws EmptyStringException
	{
		if(string == null || string.equals(""))
		{
			throw new EmptyStringException();
		}
	}


}
