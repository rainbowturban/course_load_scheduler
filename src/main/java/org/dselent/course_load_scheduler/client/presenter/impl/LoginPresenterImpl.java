package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.ArrayList;
import java.util.List;
import org.dselent.course_load_scheduler.client.action.InvalidLoginAction;
import org.dselent.course_load_scheduler.client.action.SendLoginAction;
import org.dselent.course_load_scheduler.client.errorstring.InvalidLoginStrings;
import org.dselent.course_load_scheduler.client.event.InvalidLoginEvent;
import org.dselent.course_load_scheduler.client.event.SendLoginEvent;
import org.dselent.course_load_scheduler.client.exceptions.EmptyStringException;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.presenter.LoginPresenter;
import org.dselent.course_load_scheduler.client.view.LoginView;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.inject.Inject;


public class LoginPresenterImpl extends BasePresenterImpl implements LoginPresenter
{
	private IndexPresenter parentPresenter;
	private LoginView view;
	private boolean loginClickInProgress;

	@Inject
	public LoginPresenterImpl(IndexPresenter parentPresenter, LoginView view)
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

		registration = eventBus.addHandler(InvalidLoginEvent.TYPE, this);
		eventBusRegistration.put(InvalidLoginEvent.TYPE, registration);
	}

	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}

	@Override
	public LoginView getView()
	{
		return view;
	}

	@Override
	public IndexPresenter getParentPresenter()
	{
		return parentPresenter;
	}

	@Override
	public void setParentPresenter(IndexPresenter parentPresenter)
	{
		this.parentPresenter = parentPresenter;
	}

	@Override
	public void login()
	{
		if(!loginClickInProgress)
		{
			loginClickInProgress = true;
			view.getLoginButton().setEnabled(false);
			parentPresenter.showLoadScreen();

			String userName = view.getNameTextBox().getText();
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

	/*
	 * Currently only sent by itself
	 * Probably did not need the event bus for this
	 * Useful for example purposes without involving server-side
	 */
	@Override
	public void onInvalidLogin(InvalidLoginEvent evt)
	{
		parentPresenter.hideLoadScreen();
		view.getLoginButton().setEnabled(true);
		loginClickInProgress = false;
		view.getLoginButton().setEnabled(true);

		InvalidLoginAction ila = evt.getAction();
		view.showErrorMessages(ila.toString());
	}
}
